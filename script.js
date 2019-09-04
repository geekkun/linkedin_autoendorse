javascript:

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
        end = new Date().getTime();
    }
}

document.getElementsByClassName('pv-profile-section__card-action-bar pv-skills-section__additional-skills artdeco-container-card-action-bar')[0].click();

wait(1000);

var list = document.getElementsByClassName('pv-skill-entity__featured-endorse-button-shared artdeco-button artdeco-button--circle artdeco-button--1 artdeco-button--secondary ember-view');
for (var i = 0; i < list.length; i++) {
    list[i].click();
    wait(500);
}

