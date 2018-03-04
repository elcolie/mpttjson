from django import forms
from django.forms import ModelForm
from mptt.forms import TreeNodeChoiceField, MoveNodeForm, TreeNodePositionField

from risk.models import Risk, Responses


class RiskCreateForm(ModelForm):
    # They are several fields you can try
    # TreeNodeChoiceField is by default
    # http://django-mptt.readthedocs.io/en/latest/forms.html#treenodemultiplechoicefield
    # parent = TreeNodeChoiceField(queryset=Risk.objects.all())

    class Meta:
        model = Risk
        fields = [
            'id',
            'title',
            'parent',
            'slug',
        ]


class RiskMoveNodeForm(MoveNodeForm):
    target = TreeNodeChoiceField(queryset=Risk.objects.all())
    position = TreeNodePositionField()



class ResponsesForm(forms.ModelForm):
    class Meta:
        model = Responses
        fields = '__all__'
