# Generated by Django 5.1.6 on 2025-03-01 14:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0004_alter_lesson_content'),
    ]

    operations = [
        migrations.AddField(
            model_name='lesson',
            name='tags',
            field=models.ManyToManyField(to='courses.tag'),
        ),
    ]
