function skillMember(){
    return {
        restrict: 'E',
        templateUrl: 'app/components/skill/member.html',
        controller: 'skillMemberController', 
        controllerAs: 'skillMemberCtrl',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}