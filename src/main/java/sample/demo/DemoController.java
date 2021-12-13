package sample.demo;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/demo")
public class DemoController {

	@GetMapping("/primes")
	public String getClient(Integer n) {
		return getPrimes(n);
	}

	private String getPrimes(Integer n) {
		List<Integer> primes = new ArrayList<Integer>();

		boolean prime[] = new boolean[n + 1];
		// Initialize all values as true assuming they are prime
		for (int i = 0; i <= n; i++) {
			prime[i] = true;
		}

		for (int p = 2; p * p <= n; p++) {
			// If prime[p] is true, then it isn't a multiple of previous numbers
			if (prime[p] == true) {
				// But we need to mark the multiples of p as false (not prime)
				for (int i = p * p; i <= n; i += p)
					prime[i] = false;
			}
		}

		// Now gather all prime numbers
		for (int i = 2; i <= n; i++) {
			if (prime[i] == true) {
				primes.add(i);
			}

		}

		return primes.stream().map(e -> e.toString()).collect(Collectors.joining(",", "[", "]"));
	}
}
