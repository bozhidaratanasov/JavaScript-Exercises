function solution(argument) {
  let result = [];

  if (argument === 'upvote')
    this.upvotes++;
  
  else if (argument === 'downvote')
    this.downvotes++;

  else if (argument === 'score') {
    let addedNumber = Math.ceil(0.25 * Math.max(this.upvotes, this.downvotes));
    let totalVotes = this.upvotes + this.downvotes;
    let balance = this.upvotes - this.downvotes;

    if (this.upvotes + this.downvotes <= 50) {
      result.push(this.upvotes);
      result.push(this.downvotes);
      result.push(balance);
    }

    else {
      result.push(this.upvotes + addedNumber);
      result.push(this.downvotes + addedNumber);
      result.push(balance);
    }
    if (totalVotes < 10)
    result.push('new');

    else if (this.upvotes > 0.66 * totalVotes) 
      result.push('hot');

    else if (balance >= 0 && (this.upvotes > 100 || this.downvotes > 100))
      result.push('controversial');

    else if (balance < 0)
      result.push('unpopular');
    else 
      result.push('new');

    return result;
  }
}

let post = {
  id: '3',
  author: 'emil',
  content: 'wazaaaaa',
  upvotes: 100,
  downvotes: 100
};

solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); 
console.log(score);
