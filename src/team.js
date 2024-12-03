export class Team {
    constructor()
    {
        this.members = new Set();
    }

    add(member)
    {
        this.members.add(member);
    }

    addAll(members)
    {
        members.forEach(i => this.members.add(i));
    }

    toArray()
    {
        return Array.from(this.members);
    }
}
