package com.blog.blogchall.resource;

import com.blog.blogchall.domain.Post;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

public interface Resource <T>{
    @GetMapping
    ResponseEntity<Collection<T>> findAll();
    @GetMapping("{id}")
    ResponseEntity<T> findById(@PathVariable Long id);

    @PostMapping(consumes= MediaType.APPLICATION_JSON_UTF8_VALUE)
    ResponseEntity<T>  save(@RequestBody T t);
    @PutMapping(value = "/{id}", consumes = MediaType.APPLICATION_JSON_UTF8_VALUE)
    ResponseEntity<T>  update(@PathVariable Long id,@RequestBody T t);
    @DeleteMapping("{id}")
    ResponseEntity<T>  deleteById(@PathVariable Long id);
}
