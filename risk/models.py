from django.db import models
from django.template.defaultfilters import slugify
from mptt.models import MPTTModel, TreeForeignKey  # Applies Modified Preorder Tree Traversal for performance and various utilities such as get_root()
import re
from time import process_time
from mptt.templatetags.mptt_tags import cache_tree_children, tree_item_iterator, drilldown_tree_for_node




class Risk(MPTTModel):
    name = models.CharField(max_length=50, blank=False)
    parent = TreeForeignKey('self', null=True, blank=True, related_name='children', db_index=True)
#    full_path = models.CharField(max_length=100, null=True, blank=True)
    slug = models.SlugField(blank=True, unique=True, db_index=True)

    class MPTTMeta:
        order_insertion_by = ['name']

    def __str__(self):
        return self.name


    #children displayed in API & Treant      
    def children(self):
        return Risk.objects.filter(parent=self)
 



    #This property is used by the Serialization Method A (Coding for Entrepreneurs)
    @property
    def is_parent(self):
        if self.parent is not None:
            return False
        return True
    	
    class Meta:
        verbose_name_plural = 'Risks'