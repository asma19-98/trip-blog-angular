export class Blog {
    // hotel.model.ts
id: number;
title: string;
author: string;
description: string;
date: string;
destination: string;
like:number;
image:string;


  constructor(id:number, title:string,author:string,description:string,date:string, destination:string,like:number,image:string){
    this.id=id;
    this.title=title;
    this.author=author;
    this.description=description;
    this.date=date;
    this.destination=destination;
    this.like=like;
    this.image=image;


  }
  }
  