package com.aiyappa.crudbackend.exception;

public class UserNotFoundException extends RuntimeException {

	public UserNotFoundException(Long id) {
		super("User not found for the specifies id"+id);
	}
}
