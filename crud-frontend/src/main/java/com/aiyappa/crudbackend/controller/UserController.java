package com.aiyappa.crudbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.aiyappa.crudbackend.exception.UserNotFoundException;
import com.aiyappa.crudbackend.model.User;
import com.aiyappa.crudbackend.repository.UserRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	@PostMapping("/user")
	User newUser(@RequestBody User newUser)
	{
		return userRepository.save(newUser);
	}
	@GetMapping("/users")
	List<User> getUsers(){
		return userRepository.findAll();
	}
	@GetMapping("user/{id}")
	User getByUserId(@PathVariable Long id) {
		return userRepository.findById(id).orElseThrow(()->new UserNotFoundException(id));
	}
	
	@PutMapping("/user/{id}")
	User updateUser(@RequestBody User NewUser, @PathVariable Long id)
	{
		return userRepository.findById(id).map(user->{
			user.setUsername(NewUser.getUsername());
			user.setName(NewUser.getName());
			user.setEmail(NewUser.getEmail());
			return userRepository.save(user);
		}).orElseThrow(()->new UserNotFoundException(id));
	}
	@DeleteMapping("/user/{id}")
	String deleteUser(@PathVariable Long id)
	{
		if(!userRepository.existsById(id)) //check if the user exist in the database
		{
			throw new UserNotFoundException(id);
		}
		userRepository.deleteById(id);
		return "User with id "+ id+" has been deleted";
	}

}
