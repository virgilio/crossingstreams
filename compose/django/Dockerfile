FROM python:3.7-alpine

ENV PYTHONUNBUFFERED 1

RUN addgroup -g 1001 docker && \
    adduser -u 1001 -G docker -h /home/docker -s /bin/sh -D docker

RUN apk update \
  # psycopg2 dependencies
  && apk add --virtual build-deps gcc python3-dev musl-dev \
  && apk add postgresql-dev \
  # Pillow dependencies
  && apk add jpeg-dev zlib-dev freetype-dev lcms2-dev openjpeg-dev tiff-dev tk-dev tcl-dev curl \
  # CFFI dependencies
  && apk add libffi-dev py-cffi \
  # Translations dependencies
  && apk add gettext \
  # https://docs.djangoproject.com/en/dev/ref/django-admin/#dbshell
  && apk add postgresql-client

# Requirements are installed here to ensure they will be cached.
RUN mkdir /app
WORKDIR /app

COPY ./cs_backend/requirements.txt /requirements.txt
RUN pip install -r /requirements.txt

COPY ./compose/django/entrypoint /entrypoint
RUN sed -i 's/\r$//g' /entrypoint
RUN chmod +x /entrypoint

COPY ./compose/django/start /start
RUN sed -i 's/\r$//g' /start
RUN chmod +x /start

COPY ./cs_backend /app
RUN chown -R docker:docker /app

USER docker

CMD ["/entrypoint"]
