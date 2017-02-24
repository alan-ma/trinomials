function randint(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function clear_all() {
	document.getElementById("trinomials").innerHTML = "";
	document.getElementById("answers").innerHTML = "";
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
function neo_generate() {
	var numbers = parseInt(document.getElementById("selection").value);
	var printed = 0;
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
				var t1 = randint(a_lower, a_upper);
				var t2 = randint(a_lower, a_upper);
				var t3 = randint(c_lower, c_upper);
				var t4 = randint(c_lower, c_upper);
				a = t1*t2;
				c = t3*t4;
				b = t1*t4+t2*t3;
				not_zero = a != 0 && b != 0 && c != 0;
				truth_a = a_lower < a && a < a_upper;
				truth_b = b_lower < b && b < b_upper;
				truth_c = c_lower < c && c < a_upper;
				if (not_zero && truth_a && truth_b && truth_c) {
					var print_a = a.toString();
					var print_b = b.toString();
					var print_c = c.toString();
					var print_t1 = t1.toString();
					var print_t2 = t2.toString();
					var print_t3 = t3.toString();
					var print_t4 = t4.toString();
					if (t3 > 0) {
						print_t3 = "+" + t3.toString();
					}
					if (t4 > 0) {
						print_t4 = "+" + t4.toString();
					}
					if (t1 == 1) {
						print_t1 = "";
					} else if (t1 == -1) {
						print_t1 = "-";
					}
					if (t2 == 1) {
						print_t2 = "";
					} else if (t2 == -1) {
						print_t2 = "-";
					}
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
						var answer = "(" + print_t1 + "x" + print_t3 + ")" + "(" + print_t2 + "x" + print_t4 + ")";
					} 
				}
			}
			printed += 1;
			var content_before = document.createTextNode(trinomial_before);
			var content_after = document.createTextNode(trinomial_after);
			var node = document.createElement("li");
			var superscript = document.createElement("sup");
			var parent = document.getElementById("trinomials");
			superscript.innerHTML = "2";
			node.appendChild(content_before);
			node.appendChild(superscript);
			node.appendChild(content_after);
			parent.appendChild(node);
			console.log("created trinomial.");

			var content = document.createTextNode(answer);
			var node = document.createElement("li");
			var superscript = document.createElement("sup");
			var parent = document.getElementById("answers");
			superscript.innerHTML = "2";
			node.appendChild(content);
			node.appendChild(superscript);
			parent.appendChild(node);
			console.log("created answer.");
		}
	}
}
var visible = false;
function toggle_answers() {
	if (visible) {
		document.getElementById("answers").style.opacity = "0";
		document.getElementById("answer_button").innerHTML = "Show Answers";
		visible = false;
	} else {
		document.getElementById("answers").style.opacity = "1";
		document.getElementById("answer_button").innerHTML = "Hide Answers";
		visible = true;
	}
	console.log("toggled.");
}