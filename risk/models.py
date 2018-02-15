from django.db import models
from django.template.defaultfilters import slugify
from mptt.models import MPTTModel, TreeForeignKey  # Applies Modified Preorder Tree Traversal for performance and various utilities such as get_root()
import re
from time import process_time
from mptt.templatetags.mptt_tags import cache_tree_children, tree_item_iterator, drilldown_tree_for_node



class Category(MPTTModel):
    name = models.CharField(max_length=50, blank=False)
    parent = TreeForeignKey('self', null=True, blank=True, related_name='children', db_index=True, on_delete=models.CASCADE)

    class MPTTMeta:
        order_insertion_by = ['name']

    def __str__(self):
        return self.name
  


class Risk(MPTTModel):
    name = models.CharField(max_length=50, blank=False)
    parent = TreeForeignKey('self', null=True, blank=True, on_delete=models.CASCADE)
    slug = models.SlugField(blank=True, unique=True, db_index=True)

    class MPTTMeta:
        order_insertion_by = ['name']

    #Property used by the API (nested serialization)
    def children(self): 
        return Risk.objects.filter(parent=self)

    #Property required by Treant: Color of box
    def HTMLclass(self):
        return 'blue'

    #Property required by Treant: Collapsing of box
    def collapsed(self):
        return 'true'

    #Property required by Treant: Hyperlink
    def url(self):
        return reverse('risk', kwargs={'path': self.get_path()})

    #This property determines if the record is a parent
    @property
    def is_parent(self):
        if self.parent is not None:
            return False
        return True

    def __str__(self):
        return self.name
    	
    class Meta:
        verbose_name_plural = 'Risks'