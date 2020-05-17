from django.urls import path
from django.conf.urls import url

from . import views

urlpatterns = [
    path('posts/', views.PostListView.as_view(), name='postlistview'),
    url(r'^posts/(?P<pk>\d+)/$', views.PostDetailView.as_view(), name='postdetailview')
]
