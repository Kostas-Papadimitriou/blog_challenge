package com.blog.blogchall.domain;

import jakarta.persistence.*;
import lombok.Data;


import javax.swing.*;
import java.util.Date;

@Entity
@Data
@Table(name="USERS")
public class User{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "FIRST_NAME")
    private String first_name;
    @Column(name = "LAST_NAME")
    private String last_name;
    @Column(name = "USERNAME")
    private String username;
    @Column(name = "PASSWORD")
    private String password;
    @Column(name = "ROLE")
    private String role;
    @Column(name = "EMAIL")
    private String email;



}


