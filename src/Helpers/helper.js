editUser = async (e) => {
  e.preventDefault();
  const response = await fetch(
    `https://konecktomebackend.herokuapp.com/users/edit-user`,
    {
      method: "PUT",
      body: JSON.stringify({
        userId: this.props.userDetails._id,
        firstName: this.state.userDetails.firstName,
        lastName: this.state.userDetails.lastName,
        email: this.state.userDetails.email,
      }),
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  const details = await response.json();
  if (details === "Invalid email") {
    alert("invalid email");
  } else if (details === "User updated") {
    return "User updated";
  } else if (details === "Error") {
    return "Error";
  }
};

editProfessionAndDOB = async (e) => {
  e.preventDefault();
  const response = await fetch(
    `https://konecktomebackend.herokuapp.com/users/update-dob-profession`,
    {
      method: "PUT",
      body: JSON.stringify({
        userId: this.props.userDetails._id,
        dob: this.state.dob,
        profession: this.state.userDetails.profession,
        phone: this.state.userDetails.phone,
        gender: this.state.userDetails.gender,
      }),
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  const details = await response.json();
  if (details === "User profession and co updated!") {
    alert("Success updated");
  } else if (details === "ERROR!") {
    return "error";
  }
};

sendAddress = async (e) => {
  e.preventDefault();
  const response = await fetch(
    "https://konecktomebackend.herokuapp.com/users/update-address",
    {
      method: "POST",
      body: JSON.stringify({
        userId: this.props.userId,
        addressId: this.props.addressId,
        buildingName: this.state.addressDetails.buildingName,
        addressLine1: this.state.addressDetails.addressLine1,
        addressLine2: this.state.addressDetails.addressLine2,
        town: this.state.addressDetails.town,
        city: this.state.addressDetails.city,
        currentAddress: false,
        postCode: this.state.addressDetails.postCode,
        dateOfArrival: this.fixDateString(this.state.dateOfArrival),
        dateOfDeparture: this.fixDateString(this.state.dateOfDeparture),
      }),
      headers: {
        "Content-type": "application/json",
      },
    }
  );
  const details = await response.json();
  if (details.message === "Address added") {
    alert("success");
    this.props.fetchUser();
  } else if (
    details.message === "Date Of Arrival cannot be more than Date Of Departure"
  ) {
    alert("error");
  }
};
