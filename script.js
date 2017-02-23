function randint(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function clear_all() {
	document.getElementById("trinomials").innerHTML = "";
	console.log("cleared.");
}
function initialize_arrays() {
	a_upper = document.getElementById("a_upper");
	b_upper = document.getElementById("b_upper");
	c_upper = document.getElementById("c_upper");
	a_lower = document.getElementById("a_lower");
	b_lower = document.getElementById("b_lower");
	c_lower = document.getElementById("c_lower");
	bounds = [a_upper, b_upper, c_upper, a_lower, b_lower, c_lower];
	for (j=0; j<6; j++) {
		for (i=10; i<=100; i+=10) {
			if (i != 50) {
				var node = document.createElement("option");
				if (j<3) {
					node.value = i.toString();
					node.innerHTML = i.toString();
				} else {
					node.value = -i.toString();
					node.innerHTML = -i.toString();	
				}
				bounds[j].appendChild(node);
			}
		}
	}
}
function generate() {
	var numbers = parseInt(document.getElementById("selection").value);
	var printed = 0;
	var parent = document.getElementById("trinomials");
	var integer = false;
	a_upper = parseInt(document.getElementById("a_upper").value);
	b_upper = parseInt(document.getElementById("b_upper").value);
	c_upper = parseInt(document.getElementById("c_upper").value);
	a_lower = parseInt(document.getElementById("a_lower").value);
	b_lower = parseInt(document.getElementById("b_lower").value);
	c_lower = parseInt(document.getElementById("c_lower").value);
	if (a_upper > a_lower && b_upper > b_lower && c_upper > c_lower) {
		while (printed < numbers) {
			integer = false;
			while (!integer) {
				var a = randint(a_lower, a_upper);
				var b = randint(b_lower, b_upper);
				var c = randint(c_lower, c_upper);
				if (a != 0 && b != 0 && c != 0) {
					var print_a = a.toString();
					var print_b = b.toString();
					var print_c = c.toString();
					discriminant = Math.pow(b,2)-4*a*c
					if (a == 1) {
						print_a = "";
					} else if (a == -1) {
						print_a = "-";
					}
					if (b > 0) {
						print_b = "+" + b.toString();
					} else if (b == 1) {
						print_b = "+";
					}
					if (c > 0) {
						print_c = "+" + c.toString();
					}
					if (discriminant == Math.pow(discriminant,(1/2))) {
						integer = true;
						var trinomial_before = print_a + "x";
						var trinomial_after = print_b + "x" + print_c;
					} 
				}
			}
			printed += 1;
			var content_before = document.createTextNode(trinomial_before);
			var content_after = document.createTextNode(trinomial_after);
			var node = document.createElement("li");
			var superscript = document.createElement("sup");
			superscript.innerHTML = "2";
			node.appendChild(content_before);
			node.appendChild(superscript);
			node.appendChild(content_after);
			parent.appendChild(node);
			console.log("created trinomial.");
		}
	}
}