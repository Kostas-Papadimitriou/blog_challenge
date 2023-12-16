package com.blog.blogchall;

import com.blog.blogchall.domain.Post;
import com.blog.blogchall.resource.impl.PostResourceImpl;
import com.blog.blogchall.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.util.Date;
import java.util.Random;



@SpringBootApplication
@ComponentScan(basePackages = "com.blog.blogchall")
@EnableJpaRepositories(basePackages = "com.blog.blogchall.repository")
public class BlogchallApplication {
	public static void main(String[] args) {
		SpringApplication.run(BlogchallApplication.class, args);
	}

}
