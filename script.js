        // Sample donor data (simulate database)
        const donors = [
            { name: "John Doe", bloodGroup: "A+", location: "Nairobi", contact: "0712345678" },
            { name: "Jane Smith", bloodGroup: "O-", location: "Nairobi", contact: "0723456789" },
            { name: "Ali Hassan", bloodGroup: "B+", location: "Mombasa", contact: "0734567890" },
            { name: "Mary Wanjiku", bloodGroup: "A+", location: "Nairobi", contact: "0745678901" },
            { name: "Peter Otieno", bloodGroup: "AB-", location: "Kisumu", contact: "0756789012" },
            { name: "Fatma Noor", bloodGroup: "O+", location: "Mombasa", contact: "0767890123" },
            { name: "Samuel Kiptoo", bloodGroup: "B-", location: "Eldoret", contact: "0778901234" }
        ];

        document.getElementById('matcherForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const location = document.getElementById('location').value.trim().toLowerCase();
            const bloodGroup = document.getElementById('bloodGroup').value;
            const resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '';

            // Find closest matches (same blood group, same location)
            const matches = donors.filter(d =>
                d.bloodGroup === bloodGroup &&
                d.location.toLowerCase() === location
            );

            if (matches.length === 0) {
                resultsDiv.innerHTML = '<p>No matching donors found in your location.</p>';
            } else {
                matches.forEach(donor => {
                    const card = document.createElement('div');
                    card.className = 'result-card';
                    card.innerHTML = `
                        <strong>Name:</strong> ${donor.name}<br>
                        <strong>Blood Group:</strong> ${donor.bloodGroup}<br>
                        <strong>Location:</strong> ${donor.location}<br>
                        <strong>Contact:</strong> ${donor.contact}
                    `;
                    resultsDiv.appendChild(card);
                });
            }
        });

        // Simple hospital communication (local only)
        const msgList = document.getElementById('msgList');
        document.getElementById('commForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const msg = document.getElementById('message').value.trim();
            if (msg) {
                const div = document.createElement('div');
                div.className = 'msg';
                div.textContent = `Hospital: ${msg}`;
                msgList.appendChild(div);
                document.getElementById('message').value = '';
            }
        });