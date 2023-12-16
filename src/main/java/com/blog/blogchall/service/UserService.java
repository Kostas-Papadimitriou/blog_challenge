package com.blog.blogchall.service;

import com.blog.blogchall.domain.User;

import java.util.Collection;

public interface UserService {
    Collection<User> findAll();
    User findById(Long id);
    User save(User user);
    User update(Long id,User user);
    void deleteById(Long id);


}

