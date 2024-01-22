package com.jvc.scmb.dtos;

import java.util.List;

import com.jvc.scmb.entities.Credentials;
import com.jvc.scmb.entities.Order;

import jakarta.validation.constraints.NotNull;

public class CustomerRequestDto {
	@NotNull(message = "credentials must be provided to perform request")
	private Credentials credentials;
	
	@NotNull(message = "customer's first name must be provided")
	private String firstName;
	
	@NotNull(message = "customer's last name must be provided")
	private String lastName;
	
	private String address;
	
	private String phoneNumber;
	
	private List<Order> orders;
}
