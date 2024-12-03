import { Team } from '../team';
import { ErrorRepository } from '../ErrorRepository';

test("Team",
    () => {
        let asd = [1,2,3,1,2,4,8];

        let expRes = [1,2,3,4,8];

        let team = new Team();

        team.addAll(asd);

        team.add(1);

        expect(team.toArray()).toStrictEqual(expRes);
    }
)

test("ErrorRepository",
    () => {
        let errorRepository = new ErrorRepository();

        errorRepository.errors.set(1, "error1");
        errorRepository.errors.set(2, "error2");
        errorRepository.errors.set(3, "error3");

        expect(errorRepository.translate(1)).toBe("error1");
        expect(errorRepository.translate(2)).toBe("error2");
        expect(errorRepository.translate(3)).toBe("error3");
        expect(errorRepository.translate(4)).toBe("Unknown error");
    }
)
