from django.contrib import admin
from django.db.models import Count
from django.template.response import TemplateResponse
from django.utils.safestring import mark_safe

from courseapisv2.settings import TEMPLATES
from courses.models import Category, Courses, Lesson, Tag
from django import forms
from ckeditor_uploader.widgets import CKEditorUploadingWidget
from django.urls import path


class LessonForm(forms.ModelForm):
    content = forms.CharField(widget=CKEditorUploadingWidget)

    class Meta:
        model = Lesson
        fields = '__all__'




# class LessonAdmin(admin.ModelAdmin):
#
#
#     form = LessonForm


class MyLessonAdmin(admin.ModelAdmin):
    list_display = ['id', 'subject', 'active', 'created_date']
    search_fields = ['subject']
    list_filter = ['id', 'created_date']
    list_editable = ['subject']
    readonly_fields = ['image_view']
    form = LessonForm

    def image_view(self, lesson):
        if lesson:
            return mark_safe(f"<img src='/static/{lesson.image.name}' width='200' />")

    class Media:
        css = {
            'all': ('/static/css/styles.css',)
        }

class MyAdminSite(admin.AdminSite):
    site_header = 'OU eCourse Online'

    def get_urls(self):
        return [path('course-stats/', self.course_stats),] + super().get_urls()

    def course_stats(self, request):
        stats = Category.objects.annotate(course_count=Count('courses__id')).values('id', 'name', 'course_count')

        return TemplateResponse(request, 'admin/stats.html', {
            'stats': stats
        })

admin_site = MyAdminSite(name='eCourse')

admin_site.register(Category)
admin_site.register(Courses)
admin_site.register(Lesson, MyLessonAdmin)
admin_site.register(Tag)
