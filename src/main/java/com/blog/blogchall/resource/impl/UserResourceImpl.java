package com.blog.blogchall.resource.impl;

import com.blog.blogchall.domain.User;
import com.blog.blogchall.resource.Resource;
import com.blog.blogchall.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins="http://localhost:3000")
public class UserResourceImpl implements Resource<User> {
    @Autowired
    private UserService userService;


    public ResponseEntity<Collection<User>> findAll(){
        return new ResponseEntity<>(userService.findAll(), HttpStatus.OK);
    }
    @Override
    public ResponseEntity<User> findById(@PathVariable Long id){
        return new ResponseEntity<>(userService.findById(id), HttpStatus.OK);

    }
    @Override
    public ResponseEntity<User>  save(@RequestBody User user){
        return  new ResponseEntity<>(userService.save(user), HttpStatus.CREATED);

    }
    @Override
    public ResponseEntity<User> update(@PathVariable Long id, @RequestBody User user) {
        return new ResponseEntity<>(userService.update(id, user), HttpStatus.OK);
    }
    @Override
    public ResponseEntity<User>  deleteById(@PathVariable Long id){
        userService.deleteById(id);
        return new ResponseEntity<>( HttpStatus.OK);

    }

}


