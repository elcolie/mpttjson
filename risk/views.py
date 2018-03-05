from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import get_object_or_404, render, redirect



from mptt.exceptions import InvalidMove
from mptt.forms import MoveNodeForm

from django.views import generic
from django.views.generic import View, TemplateView
from django.views.generic import ListView, CreateView, DeleteView, DetailView, UpdateView

from risk.models import Risk, Responses
from risk.forms import RiskCreateForm, RiskMoveNodeForm, ResponsesForm

from django.http.response import HttpResponse

import datetime


#-------------  Data tables ----------------------

from django.contrib.auth.models import User
from django.db.models import Q
from django.views.generic import TemplateView
from django_datatables_view.base_datatable_view import BaseDatatableView

# ----------------  Queryset --------------

from django.conf.urls import  include, url
from django.urls import reverse_lazy


# Function with today's date (used to initialize forms)  
def my_date ():
    return datetime.today().date()


#Breadcrumbs - Risk (Used by django-mptt-urls) ----------------------------------------------------

def risk(request, path, instance, extra):
    return render(
        request,
        'risk/risk.html',

        {
            'instance': instance,
            'children': instance.get_children() if instance else Risk.objects.root_nodes(),
            'extra': extra,
        }
    )



# RESPONSES -------------------------------------



#JSON for Datatable
class ResponsesListJson(BaseDatatableView):  
    model = Responses
    columns = ['id',  'risk.title', 'responsesCategory'  ]  
    order_columns = ['id', 'risk.title', 'responsesCategory' ]    #doesn't sort !

    #How to filter queryset dynamically according to the URL ?

    def get_initial_queryset(self):
        return Responses.objects.filter(risk__in=Risk.objects.get(title="All risks").get_descendants(include_self=True))  #All risks
#        return Responses.objects.filter(risk__in=Risk.objects.get(title="Cats").get_descendants(include_self=True))      #Cats only 
#        return Responses.objects.filter(risk__in=Risk.objects.get(pk=1).get_descendants(include_self=True))       #Risk 1


    #Displaying hyperlinks in the datatable
    def render_column(self, row, column):
        if column == 'id':
            return '<a href="../responses/%s/edit/">link</a>'  % row.id      # %s is a placeholder for the string %...
        else:
            return super(ResponsesListJson, self).render_column(row, column)




 











#Class with Responses 
class ResponsesListView(generic.ListView):
    model = Responses

    def get_queryset(self):
        return Responses.objects.all()

#All Responses list
class ResponsesList(ListView):
    model = Responses 


#Read
def responses_detail(request, pk):
    responses = get_object_or_404(Responses, pk=pk)
    return render(request, 'risk/responses_detail.html', {'responses': responses})

#Create
def responses_new(request):
    if request.method == "POST":
        form = ResponsesForm(request.POST)
        if form.is_valid():
            responses = form.save(commit=False)
            responses.save()
            return redirect('responses_detail', pk=responses.pk)
    else:
        form = ResponsesForm()
    return render(request, 'risk/responses_edit.html', {'form': form})

#Update
def responses_edit(request, pk):
    responses = get_object_or_404(Responses, pk=pk)
    if request.method == "POST":
        form = ResponsesForm(request.POST, instance=responses)
        if form.is_valid():
            responses = form.save(commit=False)
            responses.save()
            return redirect('responses_detail', pk=responses.pk)
    else:
        form = ResponsesForm(instance=responses)
    return render(request, 'risk/responses_edit.html', {'form': form})





# CRUD ------------------------------------------

#Risk - Create
class RiskCreateView(CreateView):
    model = Risk
    template_name = 'risk_create.html'
    form_class = RiskCreateForm
    success_url = reverse_lazy('risk:list')


#Risk - Read
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


#Risk - Update
class RiskUpdateView(UpdateView):
    '''
    Experimenting the `UpdateView`, but failed with getting the `form`
    '''
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


#Risk - Delete
class RiskDeleteView(DeleteView):
    model = Risk
    template_name = 'risk_confirm_delete.html'
    success_url = reverse_lazy('risk:list')



# Move & List --------------------------------

#Risk - Move
def RiskMoveView(request, pk=None):
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

#Risk - List
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


