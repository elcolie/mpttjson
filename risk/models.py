from django.db import models
#from django.template.defaultfilters import slugify


from django.urls import reverse

from mptt.models import MPTTModel, TreeForeignKey  
from django.contrib.auth.models import User
from django_extensions.db.models import TimeStampedModel

import datetime

# Today's date (used to initialize forms)
from datetime import *    
def my_date ():
    return datetime.today().date()


#from time import process_time
#from mptt.templatetags.mptt_tags import cache_tree_children, tree_item_iterator, drilldown_tree_for_node

#  Risk ----------------------------------------------------


#New Queryset (required to chain filters)
class RiskQuerySet(models.QuerySet):  #Capital S !
    def by_risk(self, title):
#        return self.filter(title=title)
        return self.filter(title__in=title)        

# Model Manager 
class RiskManager(models.Manager):
    def get_queryset(self):
        return RiskQuerySet(self.model, using=self._db)

"""
#See Glucosetracker:
    def by_risk(self, title):
        return self.get_queryset().by_risk(title)
"""

class Risk(MPTTModel):
    title          = models.CharField('Risk category name', max_length=200)
    parent         = TreeForeignKey('self', null=True, blank=True, verbose_name='parent category', related_name='riskcategories', on_delete=models.CASCADE)
    description    = models.TextField('Description', max_length=700)
    example        = models.TextField('Example', max_length=700)   
    slug           = models.SlugField(unique=True)

    # Required by django-serialization-recursive  
    def children(self):
        return Risk.objects.filter(parent=self)
    
    # Required by Treant: Color of box
    def HTMLclass(self):
        return 'blue'

    # Required by Treant: Collapsing of box
    def collapsed(self):
        return 'true'

    # Required by Treant: Hyperlink (in text format?)
    def url(self):
        return reverse('risk', kwargs={'path': self.get_path()})

    #Used by django-mptt-urls in making breadcrumbs
    def get_absolute_url(self):
        return reverse('risk', kwargs={'path': self.get_path()})

        
    def __str__(self):        
        return self.title

    class Meta:
        verbose_name_plural = 'Risks'





#Responses ------------------------------------

#New Queryset (required to chain filters)
#https://simpleisbetterthancomplex.com/tips/2016/08/16/django-tip-11-custom-manager-with-chainable-querysets.html
class ResponsesQuerySet(models.QuerySet):  #Capital S !
    def by_risk(self, risk):
#        return self.filter(risk=risk)
        return self.filter(risk__in=risk)        

    def by_entity(self, entity):
        return self.filter(entity__in=entity)

#Responses Model Manager 
class ResponsesManager(models.Manager):
    def get_queryset(self):
        return ResponsesQuerySet(self.model, using=self._db)

    def by_risk(self, risk):
        return self.get_queryset().by_risk(risk)

#Alternative (without Queryset)
#class ResponsesManager(models.Manager):
#    def by_risk(self, risk, **kwargs):
#        return self.select_related().filter(risk=risk)

#    def by_entity(self, entity, **kwargs):
#        return self.select_related().filter(entity=entity)

RESPONSES_CATEGORY = (  
    ('ACC', 'Accept'),    
    ('MIT', 'Mitigate'),
    ('INS', 'Insure'),
    ('HED', 'Hedge'),
)

class Responses(models.Model):    #Note, 'Response' seems to be a reserved term
    risk               = TreeForeignKey('Risk', null=True, blank=True, db_index=True, on_delete=models.CASCADE)
    responsesCategory  = models.CharField('Responses category',max_length=3, choices=RESPONSES_CATEGORY, default="ACC")
    description        = models.TextField('Description',max_length=300, default="Detailed description")
    draftingdate       = models.DateField('Drafting date', blank=True, null=True, default=my_date)
    deadlineDate       = models.DateField('Deadline date', blank=True, null=True, default=my_date)    
    objects            = ResponsesManager()  #Inherit from model manager 

  
    def __str__(self):        
        return self.description

    class Meta:
        verbose_name_plural = 'Responses'


