package com.maen.vlogwebserviceserver.domain.comments;

import com.maen.vlogwebserviceserver.domain.comments.custom.CommentsCustomRepository;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentsRepository extends JpaRepository<Comments, Long>, CommentsCustomRepository {
    int countByPostsId(Long postsId);
    List<Comments> findAllByPostsId(Long postsId);
    List<Comments> findAllByUserId(Long userId);
    void deleteByPostsId(Long postsId);
}
