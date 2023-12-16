package com.blog.blogchall.repository;

import com.blog.blogchall.domain.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}
