package com.blog.blogchall.domain;

import jakarta.persistence.*;
import lombok.Data;


import javax.swing.*;
import java.util.Date;

@Entity
@Data
@Table(name="POSTS")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "TITLE")
    private String title;
    @Column(name = "AUTHOR")
    private String author;
    @Column(name = "ARTICLE")
    private String article;
    @Column(name = "DATE")
    private Date date;
    @Column(name = "CATEGORIE")
    private String categorie;

    public Long getId(){
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getCategorie() {
        return categorie;
    }
    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
    public void setCategorie(String categorie) {
        this.categorie = categorie;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }
    public String getArticle() {
        return article;
    }

    public void setArticle(String article) {
        this.article = article;
    }
}
