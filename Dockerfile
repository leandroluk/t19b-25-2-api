FROM node
COPY . .
RUN npm i --production --silent
CMD ["node", "src"]