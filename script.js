function randint(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function clear_all() {
	document.getElementById("trinomials").innerHTML = "";
	console.log("cleared.");
}
function generate() {
	var numbers = document.getElementById("selection").value;
	var printed = 0;
	var parent = document.getElementById("trinomials");
	var integer = false;
	while (printed < numbers) {
		integer = false;
		while (!integer) {
			var a = randint(-50, 50);
			var b = randint(-50, 50);
			var c = randint(-50, 50);
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