//Static methods training
//Article and date count


function Article() {
    this.created = new Date();
    Article.count++;
    Article.last = this.created;
}

Article.count = 0;
Article.showStats = function() {
  return "Sum of counts: " + this.count + ", Last Date: " + this.data;
}

new Article();
new Article();

Article.showStats();

new Article();

Article.showStats();
