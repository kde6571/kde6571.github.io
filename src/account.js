const loginForm = document.querySelector("#sign");
const loginAccount = document.querySelector("#sign input");
const greetSign = document.querySelector("#greeting");
const signOutButton = document.querySelector("#signOut");

const hiddenClass = "hidden"

function signOut()
{
	localStorage.removeItem("Account");
	location.reload();
}

function setGreet(Account)
{
	greetSign.innerText = `Hi ${Account}`;
	greetSign.classList.remove(hiddenClass);
	signOutButton.classList.remove(hiddenClass);
}

function checkSign()
{
	const Account = localStorage.getItem("Account");
	
	if(Account === null)
		loginForm.classList.remove(hiddenClass);
	else
		setGreet(Account);
}

function onLoginSubmit(event)
{
	const Account = loginAccount.value;
	 
	localStorage.setItem("Account", Account);
	
	setGreet(Account); 
	
	loginForm.classList.add(hiddenClass);
}

checkSign();
loginForm.addEventListener("submit", onLoginSubmit);
signOutButton.addEventListener("click", signOut);