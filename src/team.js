export class Team {
    constructor()
    {
        this.members = new Set();
    }

    add(member)
    {
        if (this.members.has(member)) {
            throw new Error('Персонаж уже существует в команде');
        }
        this.members.add(member);
    }

    addAll(members)
    {
        members.forEach(i => this.add(i));
    }

    toArray()
    {
        return Array.from(this.members);
    }
}
