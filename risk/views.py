from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.urls import reverse_lazy
from django.views.generic import ListView, CreateView, DeleteView, DetailView, UpdateView
from mptt.exceptions import InvalidMove
from mptt.forms import MoveNodeForm

from risk.forms import RiskCreateForm, RiskMoveNodeForm
from risk.models import Risk


def move_category(request, pk=None):
    category = get_object_or_404(Risk, pk=pk)
    if request.method == 'POST':
        form = MoveNodeForm(category, request.POST)
        if form.is_valid():
            try:
                category = form.save()
                return HttpResponseRedirect(reverse_lazy('risk:list'))
            except InvalidMove:
                pass
    else:
        form = MoveNodeForm(category)
    '''
    Be caution on the render. The given example from http://django-mptt.readthedocs.io/en/latest/forms.html#forms
    is outdated for long time
    '''
    return render(
        request,
        'risk_move.html',
        context={
            'form': form,
            'category': category,
            'category_tree': Risk.objects.all(),
        }
    )


class RiskListView(ListView):
    model = Risk
    template_name = 'risk_list.html'

    def get_context_data(self, *, object_list=None, **kwargs):
        """Get the context for this view."""
        queryset = object_list if object_list is not None else self.object_list
        page_size = self.get_paginate_by(queryset)
        context_object_name = self.get_context_object_name(queryset)
        if page_size:
            paginator, page, queryset, is_paginated = self.paginate_queryset(queryset, page_size)
            context = {
                'paginator': paginator,
                'page_obj': page,
                'is_paginated': is_paginated,
                'object_list': queryset
            }
        else:
            context = {
                'paginator': None,
                'page_obj': None,
                'is_paginated': False,
                'object_list': queryset
            }
        if context_object_name is not None:
            context[context_object_name] = queryset
        context.update(kwargs)
        context['nodes'] = context.get('object_list')
        return super().get_context_data(**context)


class RiskCreateView(CreateView):
    model = Risk
    template_name = 'risk_create.html'
    form_class = RiskCreateForm
    success_url = reverse_lazy('risk:list')


class RiskDetailView(DetailView):
    model = Risk
    template_name = 'risk_detail.html'

    def get_context_data(self, **kwargs):
        """
        Follow the example https://docs.djangoproject.com/en/2.0/ref/class-based-views/generic-display/#detailview
        :param kwargs:
        :return:
        """
        context = super().get_context_data(**kwargs)
        return context


class RiskMoveView(UpdateView):
    """
    Experimenting the `UpdateView`, but failed with getting the `form`
    """
    model = Risk
    form_class = RiskMoveNodeForm
    template_name = 'risk_move.html'

    def get_object(self, *args, **kwargs):
        return get_object_or_404(Risk, pk=self.kwargs.get('pk'))

    def get_form(self, form_class=None):
        if self.request.method == 'POST':
            form = MoveNodeForm(Risk, self.request.POST)
            if form.is_valid():
                try:
                    category = form.save()
                    return HttpResponseRedirect(category.get_absolute_url())
                except InvalidMove:
                    pass
        else:
            '''
            from pprint import pprint
            import pdb; pdb.set_trace()
            TypeError: int() argument must be a string, a bytes-like object or a number, not 'DeferredAttribute'
            '''
            form = MoveNodeForm(Risk)
        return form


class RiskDeleteView(DeleteView):
    model = Risk
    template_name = 'risk_confirm_delete.html'
    success_url = reverse_lazy('risk:list')
