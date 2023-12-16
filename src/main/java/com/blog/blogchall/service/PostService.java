package com.blog.blogchall.service;

import com.blog.blogchall.domain.Post;
import org.springframework.data.domain.Page;

import org.springframework.data.domain.Pageable;
import java.util.Collection;

public interface PostService {
    Collection<Post> findAll();
    Post findById(Long id);
    Post save(Post post);
    Post update(Long id,Post post);
    void deleteById(Long id);


}
