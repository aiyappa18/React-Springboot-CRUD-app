package com.aiyappa.crudbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aiyappa.crudbackend.model.User;

public interface UserRepository extends JpaRepository<User,Long> {
	

}
