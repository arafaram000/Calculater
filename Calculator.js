function fn1() 
         {
             // Taking in the inital strings from the website.
            let custemerServers = document.getElementById("custemerServers").value,
                custemerStorage = document.getElementById("custemerStorage").value,
                custemerCostPerServers = document.getElementById("custemerCostPerServers").value,
                custemerCostPerStorage = document.getElementById("custemerCostPerStorage").value;
            // Changing the variable strings to ints
            custemerServers = parseInt(custemerServers);
            custemerStorage = parseInt(custemerStorage);
            custemerCostPerServers = parseInt(custemerCostPerServers);
            custemerCostPerStorage = parseInt(custemerCostPerStorage);
            // Constants given to us by google
            let googleCostPerServer = document.getElementById("severType").value,
                googleCostPerStorage = document.getElementById("storageType").value;
            // Calculating cost per server and cost per TB
            let custemerServerCost = custemerServers * custemerCostPerServers;
            let custemerStorageCost = custemerStorage * custemerCostPerStorage;
            let googleServerCost = custemerServers * googleCostPerServer;
            let googleStorageCost = custemerStorage * googleCostPerStorage;
            //Calculating savings by using google
            let serverSavings = custemerServerCost - googleServerCost;
            let storageSavings = custemerStorageCost - googleStorageCost;
            //Calculate all the totals
            let custemerTotal = custemerServerCost + custemerStorageCost;
            let cloudTotal = googleServerCost + googleStorageCost;
            let savingsTotal = serverSavings + storageSavings;
            //Outputs for the custemer
            document.getElementById("serverCost").innerHTML=(custemerServerCost);
            document.getElementById("storageCost").innerHTML=(custemerStorageCost);
            document.getElementById("cloudServerCost").innerHTML=(googleServerCost);
            document.getElementById("cloudStorageCost").innerHTML=(googleStorageCost);
            document.getElementById("serverSavings").innerHTML=(serverSavings);
            document.getElementById("storageSavings").innerHTML=(storageSavings);
            document.getElementById("custemerTotal").innerHTML=(custemerTotal);
            document.getElementById("cloudTotal").innerHTML=(cloudTotal);
            document.getElementById("savingsTotal").innerHTML=(savingsTotal);
         }
window.alert("fuckyou");
