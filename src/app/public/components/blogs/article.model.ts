export class Article {
    imageUrl: string;
    title: string;
    description: string;
    buttonText: string;
  
    constructor(imageUrl: string, title: string, description: string, buttonText: string) {
      this.imageUrl = imageUrl;
      this.title = title;
      this.description = description;
      this.buttonText = buttonText;
    }
  }
  