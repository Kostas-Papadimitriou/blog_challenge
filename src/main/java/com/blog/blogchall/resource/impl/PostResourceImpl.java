package com.blog.blogchall.resource.impl;

import com.blog.blogchall.domain.Post;
import com.blog.blogchall.resource.Resource;
import com.blog.blogchall.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.data.domain.Pageable;
import java.util.Collection;

@RestController
@RequestMapping("/posts")
@CrossOrigin(origins="http://localhost:3000")
public class PostResourceImpl implements Resource<Post> {
    @Autowired
    private PostService postService;


    public ResponseEntity<Collection<Post>> findAll(){
        return new ResponseEntity<>(postService.findAll(), HttpStatus.OK);
    }
    @Override
    public ResponseEntity<Post> findById(@PathVariable Long id){
        return new ResponseEntity<>(postService.findById(id), HttpStatus.OK);

    }
    @Override
    public ResponseEntity<Post>  save(@RequestBody Post post){
        return  new ResponseEntity<>(postService.save(post), HttpStatus.CREATED);

    }
    @Override
    public ResponseEntity<Post> update(@PathVariable Long id, @RequestBody Post post) {
        return new ResponseEntity<>(postService.update(id, post), HttpStatus.OK);
    }
    @Override
    public ResponseEntity<Post>  deleteById(@PathVariable Long id){
        postService.deleteById(id);
        return new ResponseEntity<>( HttpStatus.OK);

    }

}
