@benches.each do |bench|
    json.set! bench.id do
        json.partial! 'api/benches/bench', bench: bench
        json.reviewIds []
    end
end