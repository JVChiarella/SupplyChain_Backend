package com.jvc.scmb.dtos;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class EmployeeRequestDto {
	private CredentialsDto credentials;
	
	@NotNull(message = "employee's first name must be provided")
	private String firstName;
	
	@NotNull(message = "employee's last name must be provided")
	private String lastName;
	
	private String phoneNumber;
	
	private Boolean active;
	
	private Boolean admin;
}
