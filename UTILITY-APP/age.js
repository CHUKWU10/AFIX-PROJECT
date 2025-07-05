function getAge() {
      const birthDate = new Date(document.getElementById("birthDate").value);
      const today = new Date();
      let result = today.getFullYear() - birthDate.getFullYear();
      const age = today.getMonth() - birthDate.getMonth();
      if (age < 0 || (age === 0 && today.getDate() < birthDate.getDate())) result--;
      document.getElementById("result").innerText = "You are " + result + " years old.";
    }