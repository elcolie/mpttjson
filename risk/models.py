from django.db import models
#from django.template.defaultfilters import slugify


from django.urls import reverse

from mptt.models import MPTTModel, TreeForeignKey  
from django.contrib.auth.models import User
from django_extensions.db.models import TimeStampedModel


#import re



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

#See Glucosetracker:
    def by_risk(self, title):
        return self.get_queryset().by_risk(title)


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

    #Same as above href 
#    def get_absolute_url(self):
#        return reverse('risk', kwargs={'path': self.get_path()})

        
    def __str__(self):        
        return self.title

    class Meta:
        verbose_name_plural = 'Risks'



