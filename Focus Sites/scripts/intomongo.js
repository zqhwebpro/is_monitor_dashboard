$(document).ready(function() {
    $.getJSON('http://localhost:8080/api/monitoring/gaTopBottom', function(
        json
    ) {
        json[0].top10.forEach((top10, index) => {
            let percRound = top10.percentChange.toFixed(0);
            $('#top-10').append(
                `
                <div class="flex bar-background">
                    <span class="flex-a green"><span class="text-sm">Focus</span><span class="siteName">${top10.site}</span></span>
                    <span class="flex-b"><span class="twoWeeks">
                    <span class="text-sm"> (Last Week)</span> ${top10.twoWeeks}</span></span>
                    <span class="flex-c"><span class="lastWeek"><span class="text-sm"> (This Week)</span> ${top10.lastWeek}</span></span>
                    <span class="flex-d"><span class="percentChange">${percRound}%</span></span>
                </div>
                `
            );
        });
        json[0].bottom10.forEach((bottom10, index) => {
            let percRound = bottom10.percentChange.toFixed(0);
            $('#bottom-10').append(
                `
                <div class="flex bar-background">
                    <span class="flex-a red"><span class="text-sm">Focus</span><span class="siteName">${bottom10.site}</span></span>
                    <span class="flex-b"><span class="twoWeeks">
                    <span class="text-sm"> (Last Week)</span> ${bottom10.twoWeeks}</span></span>
                    <span class="flex-c"><span class="lastWeek"><span class="text-sm"> (This Week)</span> ${bottom10.lastWeek}</span></span>
                    <span class="flex-d"><span class="percentChange-b">${percRound}%</span></span>
                </div>
                `
            );
        });
    });
});
