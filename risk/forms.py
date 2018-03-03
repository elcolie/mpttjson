from django.forms import ModelForm
from mptt.forms import TreeNodeChoiceField, MoveNodeForm, TreeNodePositionField

from risk.models import Genre


class GenreCreateForm(ModelForm):
    # They are several fields you can try
    # TreeNodeChoiceField is by default
    # http://django-mptt.readthedocs.io/en/latest/forms.html#treenodemultiplechoicefield
    # parent = TreeNodeChoiceField(queryset=Genre.objects.all())

    class Meta:
        model = Genre
        fields = [
            'id',
            'name',
            'parent',
        ]


class GenreMoveNodeForm(MoveNodeForm):
    target = TreeNodeChoiceField(queryset=Genre.objects.all())
    position = TreeNodePositionField()
