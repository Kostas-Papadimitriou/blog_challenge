package com.blog.blogchall.service.impl;

import com.blog.blogchall.domain.Post;
import com.blog.blogchall.repository.PostRepository;
import com.blog.blogchall.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import org.springframework.data.domain.Pageable;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Service
public class PostServiceImpl implements PostService {
    @Autowired
    private PostRepository postRepository;

    @Override
    public Collection<Post> findAll( ) {
        return postRepository.findAll();
    }

    @Override
    public Post findById(Long id) {
        return postRepository.findById(id).orElse(null);
    }

    @Override
    public Post save(Post post) {
        return postRepository.save(post);
    }

    @Override
    public Post update(Long id, Post post) {
        if (postRepository.existsById(id)) {
            post.setId(id);
            return postRepository.save(post);
        }
        return null;
    }

    @Override
    public void deleteById(Long id) {
        postRepository.deleteById(id);
    }
//    private  Long postId =100L;
//    private Map<Long,Post> postMap=new HashMap<Long,Post>();
//
//    {
//        Post post = new Post();
//        post.setId(postId);
//        post.setTitle(" ");
//        post.setArticle(" ");
//        post.setAuthor(" ");
//        postMap.put(post.getId(),post);
//
//
//    }
//    @Override
//    public Collection<Post> findAll(){
//        return postMap.values();
//    }
//    @Override
//    public Post findById(Long id){
//        return  postMap.get(id);
//    }
//    @Override
//
//    public Post save(Post post){
//        Long newPostId=++postId;
//        post.setId(newPostId);
//        postMap.put(post.getId(),post);
//        return postMap.get(newPostId);
//    }
//    @Override
//    public Post update(Long id,Post post){
//        postId=id;
//        if (postMap.get(postId)!=null){
//            postMap.put(postId,post);
//            return postMap.get(postId);
//        }
//        return null;
//    }
//    @Override
//    public Post deleteById(Long id){
//        if (postMap.get(id)!=null){
//            return postMap.remove(id);
//        }
//        return null;
//    }
}
