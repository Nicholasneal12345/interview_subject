            let all = [];
            let allItems = [];

            const allCounts = 52;
            const items = 4;

            // 設定一組幾副牌
            function settingAll(allCounts = 52, func) {
                // 先把52張牌放滿
                let newPoker = [];

                for(let i = 0; i < allCounts; i = i + 1) {
                    newPoker.push(i + 1);
                }

                return newPoker;
            }

            // 發牌
            function pokerDeal(pokers, items, pokercounts = pokers.length/items) {
                // pokers為哪副牌
                // items分成幾副
                // pokercounts每副幾張牌

                let newPokers = [];

                // 先根據items在newPokers分成items攤
                for(let i = 0; i < items; i ++) {
                    newPokers.push([]);
                }

                // 將pokers分成items攤並且存進newPokers中
                for(let i = 0; i < pokers.length; i = i + 1) {
                    newPokers[Math.floor(i / pokercounts)].push(pokers[i]);
                }

                return newPokers;
            }

            // 打亂牌組
            function shuffle(poker, allCounts) {
                // 這裡的allCounts是要給心牌組的數量
                // 這裡的settingAll是新的牌組
                // 這裡的poker是舊有的牌組

                // pokers儲存牌組
                let pokers = poker?poker:settingAll(allCounts);

                // 解構賦值語法mdn網址
                // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
                for(let i = 0; i < pokers.length; i++) {
                    const randomIndex = Math.floor(Math.random() * i);
                    [pokers[i], pokers[randomIndex]] = [pokers[randomIndex], pokers[i]];
                }

                return pokers;
            }

            all = settingAll(allCounts);

            console.log("洗亂後的牌組: ", shuffle());