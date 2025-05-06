setTimeout(() => {
            document.getElementById("leftImage").style.left = "20%";
            document.getElementById("rightImage").style.left = "80%";
            setTimeout(() => {
                document.getElementById("form").style.display = "block";
            }, 1000);
        }, 500);