FROM node:16

RUN apt-get update && apt-get install -y libgtk-3.0 libgbm-dev libnss3 libatk-bridge2.0-0 libasound2 \
    && apt-get update && apt-get install -qq build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev

WORKDIR /usr/src/app
