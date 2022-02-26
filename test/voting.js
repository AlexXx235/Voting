const Voting = artifacts.require("Voting")

contract("Voting", accounts => {
    let instance
    let account1 = accounts[0]
    let account2 = accounts[1]

    before(async () => {
        instance = await Voting.deployed()
    })

    describe('participating the voting', () => {
        it('user can become a candidate', async function () {
            await instance.participate({from: account1})
            const candidates = await instance.getAllCandidates()
            assert(candidates[0].addr === account1, "Addresses do not match")
        })

        it("user can not become a candidate twice", async function () {
            try {
                await instance.participate({from: account1})
                assert(false, "Transaction has not been reverted")
            } catch (err) {
                assert(true)
            }
        })
    })

    describe('getters', () => {
        it('user can get the list of all candidates', async () => {
            try {
                const candidates = await instance.getAllCandidates()
                assert(candidates[0].addr === account1, 'Addresses are not equal')
            } catch (err) {
                assert(false, err.message)
            }
        })
    })

    describe('voting', () => {
        before(async () => {
            // join the second account to voting
            await instance.participate({from: account2})
        })

        it('user can not vote for themself', async () => {
            try {
                await instance.vote(account2, {from: account2})
                assert(false, 'Transaction has not been reverted')
            } catch (err) {
                assert(true)
            }
        })

        it('user can vote', async () => {
            try {
                await instance.vote(account2, {from: account1})
                assert(true)
            } catch (err) {
                assert(false, err.message)
            }
        })

        describe('checking if vote was correctly written down', async () => {
            it('user is voted', async () => {
                const voted = await instance.voted(account1, {from: account1})
                assert(voted, 'user did not voted')
            })

            it('vote was added to chosen candidate', async () => {
                const candidate = await instance.candidates(1)
                assert(candidate.votes.toNumber() === 1, 'vote was not written down')
            })
        });
    })
})