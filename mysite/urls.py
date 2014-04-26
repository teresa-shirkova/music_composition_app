from django.conf.urls import patterns, include, url
from django.views.generic import TemplateView
import views


# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    url(r'^$', TemplateView.as_view(template_name='base.html'),
        name='index'),
)
